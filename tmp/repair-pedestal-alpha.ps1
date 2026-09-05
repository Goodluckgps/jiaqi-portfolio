Add-Type -AssemblyName System.Drawing

$path = 'E:\claudecode\personal-homepage-v2\assets\greeting-fixed-base-transparent-v4.png'
$image = [System.Drawing.Bitmap]::new($path)

# Restore the white cylindrical top independently from the extracted background.
# Coordinates are tied to this 1254 × 1254 generated asset.
for ($y = 958; $y -le 1115; $y++) {
  for ($x = 386; $x -le 870; $x++) {
    $insideTop = ((($x - 628) * ($x - 628)) / (242.0 * 242.0) + (($y - 1026) * ($y - 1026)) / (70.0 * 70.0)) -le 1.0
    $insideFront = $y -ge 1024 -and $y -le 1098 -and ((($x - 628) * ($x - 628)) / (242.0 * 242.0) + (($y - 1058) * ($y - 1058)) / (74.0 * 74.0)) -le 1.0
    if ($insideTop -or $insideFront) {
      $color = $image.GetPixel($x, $y)
      $image.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(255, $color.R, $color.G, $color.B))
    }
  }
}

$temporary = 'E:\claudecode\personal-homepage-v2\assets\greeting-fixed-base-transparent-v5.png'
$image.Save($temporary, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "saved=$temporary; cornerAlpha=$($image.GetPixel(0,0).A); format=$($image.PixelFormat)"
$image.Dispose()
