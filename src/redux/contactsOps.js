//Оголоси наступні операції:
// fetchContacts - одержання масиву контактів (метод GET) запитом. Базовий тип екшену це рядок "contacts/fetchAll".
// addContact - додавання нового контакту (метод POST). Базовий тип екшену це рядок "contacts/addContact".
// deleteContact - видалення контакту по ID (метод DELETE). Базовий тип екшену це рядок "contacts/deleteContact".

// Для коректного опрацювання помилки HTTP-запиту в середині операцій, використай конструкцію try...catch,
// та у блоці catch поверни результат виклику методу thunkAPI.rejectWithValue.

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://683f4f111cd60dca33def4ce.mockapi.io';
