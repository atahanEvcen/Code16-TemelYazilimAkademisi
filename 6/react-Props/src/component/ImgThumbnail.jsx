function ImgThumbnail({imgSrc, imgAlt}) {

    const imgStyle = {
        padding:"4px",
        borderRadius:"10px",
        border: "1px solid black",
        maxwidth: "100%",
        boxSizing:"border-box",
        marginBottom:"5px",
    }

  return (
    <img 
    src={imgSrc} 
    alt={imgAlt}
    style={imgStyle} 
    />
  )
}

export default ImgThumbnail
