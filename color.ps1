Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('C:\Users\angel\OneDrive\futuriza\proyectos\guardforcesegurity-antigravity\guardforce-web\src\assets\icon-logo.png')
$bmp = new-object System.Drawing.Bitmap($img)
$color = $bmp.GetPixel(0,0)
Write-Host "COLOR: $($color.R) $($color.G) $($color.B)"
