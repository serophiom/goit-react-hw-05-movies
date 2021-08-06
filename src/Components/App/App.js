import React from "react";
// import { useState, useEffect } from 'react';
import AppBar from '../AppBar/AppBar';
// import Searchbar from '../Searchbar/Searchbar';
// import FetchSearch from '../../FetchSearch';
// import ImageGallery from '../ImageGallery/ImageGallery';
// import Button from '../Button/Button';
// import LoaderOfImages from '../Loader/Loader';
// import Modal from '../Modal/Modal';
// import './App.css';
// import { ToastContainer } from 'react-toastify';

export default function App () {
  return (
    <>
    <AppBar />
    </>
  )
};

// export default function App () {
//   const [imageName, setImageName] = useState ('');
//   const [images, setImages] = useState ([]);
//   const [pageNumber, setPageNumber] = useState (1);
//   const [isLoad, setIsLoad] = useState (false);
//   const [modalWindow, setModalWindow] = useState (false);
//   const [modalImage, setModalImage] = useState ('');
//   const [alt, setAlt] = useState ('');

//   useEffect (() => {
//     if (imageName === '') {
//       return;
//     }
    
//     const startPage = 1;

//     setIsLoad(true);
//     setPageNumber(1);
//     FetchSearch(imageName, startPage).then(response => {
//         setImages(response.hits);
//         setIsLoad(false);
//       });
//   }, [imageName])

//   const handleAddImagesButton = () => {
//     let nextPage = pageNumber + 1;
//     setPageNumber(nextPage);
//     setIsLoad(true);
//     FetchSearch(imageName, nextPage).then(response => {
//       setImages([...images, ...response.hits]);
//       setIsLoad(false)
//     }).finally(() => {
//       scroll();
//     })
//   };

//   const scroll = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     })
//   }

//   const openModal = event => {
//     const idOfElement = Number(event.target.dataset.id);
//     const currentImage = images.filter((image) => {
//       return image.id === idOfElement;
//     });
//     currentImage?.forEach((element) => {
//       setModalImage(element.largeImageURL);
//       setAlt(element.tags)
//     });
//     setModalWindow(true);
//   };

//   const handleSearchSubmit = value => {
//     setImageName(value);
//   };

//   const modalSwith = () => {
//     setModalWindow(!modalWindow);
//   }

//     return (
//       <>
//       <Searchbar onSubmit={handleSearchSubmit} />
//       <ImageGallery images={images} clickOnImage={openModal} />
//       {images.length > 0 && <Button clickOnButton={handleAddImagesButton} />}
//       {isLoad && <LoaderOfImages />}
//       {modalWindow && (
//         <Modal modalImage={modalImage} alt={alt} closeModal={modalSwith} />
//       )}
//       <ToastContainer autoClose={3000} />
//       </>
//   );
// };