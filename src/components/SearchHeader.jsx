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
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600'>
      <Link to='/'className='flex items-center'>
        <BsYoutube className='text-4xl text-brand'/>
        <h1 className='font-bold ml-2 text-3xl'>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input type="text" placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} className='w-7/12 p-2 outline-none bg-black text-gray-50'/>
        <button className='bg-zinc-600 px-4'><BsSearch /></button>
      </form>
    </header>
  )
}

export default SearchHeader