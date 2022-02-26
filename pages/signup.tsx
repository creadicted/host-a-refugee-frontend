import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  Title,
  Container,
  Grid,
  Space,
  Button,
  Paper,
  Card,
  Text,
  Group,
  Badge,
  Center,
  InputWrapper,
  Input,
  MediaQuery,
} from '@mantine/core';
import { Nav, Host } from '../components';

const Home = () => {
  return (
    <>
      <Head>
        <title>Register as a host</title>
        <meta name='' content='' />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container size={'lg'}>
        <Nav />
        <Host />
      </Container>
    </>
  );
};

export default Home;
