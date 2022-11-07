import React, {useEffect, useState} from "react";
import gallery from "../../Assets/gallery";
import {useNavigate, useParams} from "react-router-dom";

export default function GalleryPage() {
  const {id} = useParams();
  const navigate = useNavigate();

  const element = gallery[decodeURIComponent(id)];
  useEffect(() => {
    if (!element) navigate("/gallery");
  });

  const [slide, setSlide] = useState(0);

  const {img, title, prompt, wip} = element;

  const slideArray = [img].concat(wip);

  const advanceSlide = () => setSlide((slide + 1) % slideArray.length);

  return (
    <>
      <h5>{title}</h5>
      <div>{prompt}</div>
      <img src={slideArray[slide]} onClick={advanceSlide}/>
    </>
  );
}
