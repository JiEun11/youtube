import React, { useEffect, useState } from 'react'
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] =  useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(()=> {
    // NOTE: param이 변경될 때마다 (뒤로가기, 앞으로가기 해도) search text 변경되도록
    // keyword가 없으면 빈 string으로 세팅
    setText(keyword || '');
  }, [keyword])

  return (
    <header>
      <Link to='/'>
        <BsYoutube />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} />
        <button><BsSearch /></button>
      </form>
    </header>
  )
}

export default SearchHeader