import SectionContainer from './SectionContainer'

const ErrorSection = () => {
  return (
    <SectionContainer sectionId={'section-error'}>
      <main>
        <img
          src="/assets/loadingCircleBlur.svg"
          alt=""
          className="h-72 w-72 animate-spin"
        />
        <span className="text-2xl font-semibold">
          Loading PSane Creations ...
        </span>
      </main>
    </SectionContainer>
  )
}

export default ErrorSection
