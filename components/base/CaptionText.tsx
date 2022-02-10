type CaptionTextProps = {
  align: 'center' | 'start'
  children: React.ReactElement | React.ReactElement[] | string
}
const CaptionText = ({ align, children }: CaptionTextProps) => {
  return (
    <main>
      <div
        className={`text-md flex w-full items-center font-bold text-gray-600 ${
          align === 'start' ? 'justify-start' : 'justify-center'
        }`}
      >
        <span>{children}</span>
      </div>
    </main>
  )
}

export default CaptionText
