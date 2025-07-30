export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const targetPosition = element.offsetTop - 80

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }
}
