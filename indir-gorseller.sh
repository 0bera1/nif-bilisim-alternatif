#!/usr/bin/env bash
# Kullanım: bash indir-gorseller.sh
# 02-gorsel-listesi.txt içindeki tüm görselleri images/ klasörüne indirir.
mkdir -p images
grep -E '^http' 02-gorsel-listesi.txt | while read -r url; do
  f="images/$(basename "$url")"
  echo "İndiriliyor: $f"
  curl -fsSL --retry 2 -o "$f" "$url" || echo "  HATA: $url"
done
echo "Bitti. Dosyalar images/ klasöründe."
