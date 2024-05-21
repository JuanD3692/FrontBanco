import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { posts } from '../../../_mock/blog.jsx';
import PostCard from '../post-card';

export default function BlogView() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await posts();
      setPostsData(data);
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Reportes</Typography>
      </Stack>

      <Grid container spacing={3}>
        {postsData.map((post, index) => (
          <PostCard key={post.id} post={post} index={index + 3} />
        ))}
      </Grid>
    </Container>
  );
}
