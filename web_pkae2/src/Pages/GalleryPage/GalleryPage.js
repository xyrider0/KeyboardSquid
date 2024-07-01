import {MDBCol, MDBContainer, MDBRow, MDBTypography} from "mdb-react-ui-kit";
import React, {useEffect, useState} from "react";
import {chunker} from "../../Utils/utils";
import gallery from "../../Assets/gallery";
import {Link} from "react-router-dom";
import styles from './GalleryPage.module.css';

export default function GalleryPage() {

  const [filter, setFilter] = useState('+pop');
  const [list, setList] = useState(Object.values(gallery));

  const handleFilter = ({target: {value}}) => setFilter(value);

  useEffect(() => {
    let newList = list;
    if (filter === '+pop') {
      newList.sort((a, b) => a.pop - b.pop);
    } else if (filter === '-date') {
      newList.sort((a, b) => a.date.diff(b.date));
    } else if (filter === '+date') {
      newList.sort((a, b) => b.date.diff(a.date));
    }
    setList(list);
  }, [filter])

  const imgRows = chunker(list, 4);
  return (
    <>
      <MDBTypography variant='h1' className='text-center mt-5'>Gallery</MDBTypography>
      {/* <select value={filter} onChange={handleFilter}>
        <option value="+pop">Recommended</option>
        <option value="-date">Oldest</option>
        <option value="+date">Newest</option>
      </select> */}
      <MDBContainer className='container text-md-start container-fluid'>
        {imgRows.map(galleryEntries => <MDBRow className='mt-3'>
          {galleryEntries.map(({id, img}) => <MDBCol className='img-fluid col-12 col-md-3'>
            <Link to={`/gallery/${encodeURIComponent(id)}`}>
              <img src={img} className={styles.imageSample}/>
            </Link>
          </MDBCol>)}
        </MDBRow>)}
      </MDBContainer>
    </>
  );
}