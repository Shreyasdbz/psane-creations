type PageContainerProps = {
  children: React.ReactElement | React.ReactElement[]
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="h-screen w-screen overflow-hidden">{children}</div>
}

export default PageContainer
