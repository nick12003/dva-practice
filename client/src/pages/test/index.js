import { useEffect } from 'react';
import { connect } from 'umi';

const IndexPage = (p) => {
  console.log(p);

  useEffect(() => {
    console.log('enter');
  }, []);

  return (
    <div>
      <h1>Page index2</h1>
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(IndexPage);
