import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";


const ProjectIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [fetchPostById, isLoading, error] = useFetching( async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data);
  })

  useEffect(() => {
    fetchPostById(params.id)
  },[])
  return (
    <div className="wrapper">
      <div className="wrapper-top">
        <hr className="hr"></hr>
        <div className="container">
          <Header />
          <div className='pagepost__menu'>
            <a className='pagepost__menu-link'>Главная/</a>
            <a className='pagepost__menu-link'>Проекты/</a>
            <p className='pagepost__menu-prgh'>{}</p>
            <div>{}</div>
            <div>Я не понимаю что я делаю не так, я доставал инфу с объектов на сервере уже много раз, но тут либо я отсталый
              либо я ультраотсталый, потому что я пол дня пытался это как-то испрвить. Я в тильте дальше делать не стал. Т.к. я в тильте я 
              прикрепил проект чисто с версткой, и проект чисто с js, в которых реализовано вроде все из того, что в требованиях есть.
              Если вам не понравится что-то, скажите, пожалуйста, что я сделал не так и почему я не могу достать title и вывести его , через hr`a, остальное из требований 
              умею. 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectIdPage
