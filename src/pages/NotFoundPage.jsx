import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function NotFoundPage() {
  console.log('not found!');
  return (
    <>
      <main className="p-3">
        <p>
          Страница не найдена <br />
          <a href="/">Перейти на главную</a>
        </p>
      </main>
    </>
  );
}
