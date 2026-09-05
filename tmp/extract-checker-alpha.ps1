Add-Type -AssemblyName System.Drawing

$inputPath = 'C:\Users\dell\.codex\generated_images\01a05836-ea28-7901-b8e9-8433daf16891\exec-fbe6932a-2b0b-451c-a916-95adf635bbcb.png'
$outputPath = 'E:\claudecode\personal-homepage-v2\assets\greeting-fixed-base-transparent-v4.png'
$source = [System.Drawing.Bitmap]::new($inputPath)
$image = [System.Drawing.Bitmap]::new($source.Width, $source.Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($image)
$graphics.DrawImageUnscaled($source, 0, 0)
$graphics.Dispose()
$source.Dispose()

$width = $image.Width
$height = $image.Height
$seen = [bool[]]::new($width * $height)
$queue = [int[]]::new($width * $height)
$head = 0
$tail = 0

function Add-Pixel([int]$x, [int]$y) {
  $id = $y * $width + $x
  if (-not $seen[$id]) {
    $seen[$id] = $true
    $queue[$script:tail] = $id
    $script:tail++
  }
}

for ($x = 0; $x -lt $width; $x++) { Add-Pixel $x 0; Add-Pixel $x ($height - 1) }
for ($y = 0; $y -lt $height; $y++) { Add-Pixel 0 $y; Add-Pixel ($width - 1) $y }

while ($head -lt $tail) {
  $id = $queue[$head++]
  $x = $id % $width
  $y = [math]::Floor($id / $width)
  $color = $image.GetPixel($x, $y)
  $minimum = [math]::Min($color.R, [math]::Min($color.G, $color.B))
  $maximum = [math]::Max($color.R, [math]::Max($color.G, $color.B))
  if ($minimum -lt 235 -or ($maximum - $minimum) -gt 10) { continue }
  $image.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $color.R, $color.G, $color.B))
  if ($x -gt 0) { Add-Pixel ($x - 1) $y }
  if ($x + 1 -lt $width) { Add-Pixel ($x + 1) $y }
  if ($y -gt 0) { Add-Pixel $x ($y - 1) }
  if ($y + 1 -lt $height) { Add-Pixel $x ($y + 1) }
}

$image.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$corners = @($image.GetPixel(0,0).A, $image.GetPixel($width-1,0).A, $image.GetPixel(0,$height-1).A, $image.GetPixel($width-1,$height-1).A)
Write-Output "size=${width}x${height}; corners=$($corners -join ','); format=$($image.PixelFormat)"
$image.Dispose()
