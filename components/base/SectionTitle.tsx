type SectionTitleProps = {
  children: string
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <main className="items-start">
      <span className="text-3xl font-bold text-gray-800">{children}</span>
    </main>
  )
}

export default SectionTitle
