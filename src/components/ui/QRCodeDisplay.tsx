import Image from 'next/image'

interface QRCodeDisplayProps {
  qrCodeData: string;
  // aiImageData is no longer required
}

export function QRCodeDisplay({ qrCodeData }: QRCodeDisplayProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      {qrCodeData && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={qrCodeData || "/placeholder.svg"}
              alt="Generated QR Code"
              fill
              className="object-contain"
              sizes="200px"
            />
          </div>
        </div>
      )}
    </div>
  )
}

