# denizhankalkan.com

Kişisel portföy sitesi. Angular + TypeScript frontend, küçük bir Spring Boot (Java) backend.

```
frontend/   Angular uygulaması: sayfa, metinler, görseller
backend/    Spring Boot: iletişim formundan gelen notları alır, yayında siteyi de sunar
scripts/    derlenen siteyi backend'e kopyalayan yardımcı
.vscode/    VS Code görevleri, başlatma ayarları, önerilen eklentiler
```

## Gerekenler

- Node.js 22 veya üstü
- JDK 21
- Maven 3.9 veya üstü

## İlk kurulum

```bash
npm run setup
```

Sonra klasörü VS Code'da aç ve önerilen eklentileri kur.

## Çalıştırma

VS Code'da **Run and Debug** bölümünden "Site in Chrome" seç. Backend ve frontend birlikte açılır.

Terminalden, iki ayrı pencerede:

```bash
npm run start:backend     # http://localhost:8080
npm run start:frontend    # http://localhost:4200
```

Frontend tek başına da çalışır. İletişim formu varsayılan olarak kapalıdır; açarsan backend'in de çalışması gerekir.

## Neyi nerede değiştirirsin

| Ne | Dosya |
| --- | --- |
| Bütün metinler, projeler, GitHub / LinkedIn / YouTube linkleri | `frontend/src/app/content/site.content.ts` |
| Freelance müşterileri, film ve pazarlama projeleri (boş satırlar hazır; başlığı doldurunca görünür, görsel için `image` alanı) | `frontend/src/app/content/site.content.ts` |
| İletişim formunu açma (`showForm: true`, backend gerekir) | `frontend/src/app/content/site.content.ts` |
| Renkler, yazı tipleri, sayfa genişliği | `frontend/src/styles.scss` |
| Fotoğraf ve diğer görseller | `frontend/public/media/` |
| Bölümlerin sırası | `frontend/src/app/app.html` |
| İsmin yanındaki lale | `frontend/src/app/components/tulip-mark/tulip-mark.ts` |
| Izgaradan yıldıza geçen şerit | `frontend/src/app/helpers/crossing-renderer.ts` |
| Backend adresi | `frontend/src/environments/` ve `frontend/proxy.conf.json` |
| Backend portu, notların dosyası, izinli adresler | `backend/src/main/resources/application.properties` |

Fotoğrafı değiştirmek için yeni dosyayı `frontend/public/media/portrait.jpg` adıyla kaydet.

Linkler şu an boş. `site.content.ts` içindeki `links` listesinde `url` alanlarını doldurunca tıklanır hale gelir.

## Backend ne yapar

- `POST /api/contact` formdaki notu doğrular ve `backend/data/messages.jsonl` dosyasına ekler. Veritabanı yok; notları okumak için dosyayı açman yeter.
- `GET /api/health` backend'in ayakta olduğunu gösterir.
- Yayında derlenmiş Angular sitesini de sunar.

## Yayına alma

```bash
npm run build
```

Bu komut frontend'i derler, backend'in içine kopyalar ve tek bir dosya üretir: `backend/target/site.jar`.

```bash
java -jar backend/target/site.jar
```

Site ve API aynı adresten çalışır. Sunucuda alan adını bu uygulamanın portuna yönlendirmen yeterli.

Yalnızca frontend'i statik bir servise koymak istersen `frontend/dist/frontend/browser` klasörünü yükle. Bu durumda `frontend/src/environments/environment.ts` içindeki `apiUrl` backend'in tam adresi olmalı.
