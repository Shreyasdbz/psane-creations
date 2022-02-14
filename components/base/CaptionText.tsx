type CaptionTextProps = {
  align: 'center' | 'start'
  children: React.ReactElement | React.ReactElement[] | string
}
const CaptionText = ({ align, children }: CaptionTextProps) => {
  return (
    <main>
      <div
        className={`flex w-full items-center pt-2 text-lg font-bold text-gray-500 ${
          align === 'start' ? 'justify-start' : 'justify-center'
        }`}
      >
        <span>{children}</span>
      </div>
    </main>
  )
}

export default CaptionText
