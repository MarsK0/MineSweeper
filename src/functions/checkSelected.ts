function checkSelectedField(id: string): boolean{
  return !document.getElementById(id)!.classList.contains("selectedField")
}

export default checkSelectedField