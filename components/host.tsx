import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Space, Paper } from '@mantine/core';

export const Host = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');

  return (
    <>
      <Space h="xl" />
      <Paper padding="lg" shadow="sm" radius="md" withBorder>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <input {...register('firstName')} placeholder="First name" />
          <select {...register('category')}>
            <option value="">Select...</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
          </select>
          <textarea {...register('aboutYou')} placeholder="About you" />
          <p>{data}</p>
          <input type="submit" />
        </form>
      </Paper>
    </>
  );
};

{/* <Grid>
  <Grid.Col md={6} sm={12}>
    <InputWrapper id="input-demo" error="">
      <Input id="input-demo" placeholder="News Article Title" />
    </InputWrapper>
  </Grid.Col>
  <Grid.Col md={4} sm={12}>
    <DateRangePicker
      inputFormat="DD MMM, YYYY"
      placeholder="Pick dates range"
      value={dateRange}
      onChange={setDateRange}
    />
  </Grid.Col>
  <Grid.Col span={2} style={{ display: 'flex', justifyContent: 'center' }}>
    <Button color="yellow" size={'sm'} onClick={handleClick}>
      {loading ? 'Loading' : 'Search'}
    </Button>
  </Grid.Col>
</Grid>; */}
