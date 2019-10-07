import React from 'react';
import { useRouter } from 'next/router';

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Edit with Id of {id}</div>;
};

export default Edit;
