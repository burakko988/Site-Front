export function toKebabCase(str: string): string {
  // Index imzası eklenen nesne tanımı
  const turkishChars: { [key: string]: string } = {
    ç: 'c',
    ğ: 'g',
    ı: 'i',
    ö: 'o',
    ş: 's',
    ü: 'u',
    Ç: 'C',
    Ğ: 'G',
    İ: 'I',
    Ö: 'O',
    Ş: 'S',
    Ü: 'U',
  };

  return (
    str
      // Türkçe karakterleri İngilizce muadilleriyle değiştir
      .replace(/[çğışüöÇĞİŞÜÖ]/g, (match) => turkishChars[match as keyof typeof turkishChars])
      // Önce string'i küçük harflere çevir
      .toLowerCase()
      // Ardından boşlukları ve izin verilmeyen karakterleri '-' ile değiştir
      .replace(/[\s\W-]+/g, '-')
      // Eğer string '-' ile başlıyorsa, baştaki '-' karakterlerini kaldır
      .replace(/^-+/, '')
      // Eğer string '-' ile bitiyorsa, sondaki '-' karakterlerini kaldır
      .replace(/-+$/, '')
  );
}
