function ImageSmall({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="h-12 w-12 rounded-xl overflow-hidden border drop-shadow">{children}</h3>
  )
}

ImageSmall.propTypes = {}

export default ImageSmall
