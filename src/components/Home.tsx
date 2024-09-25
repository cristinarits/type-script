import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ 
        width: '100%',
        maxWidth: 1000,
        height: '50vh'
        }}
      variant="quilted"
      cols={3}
      rowHeight={300}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 200, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            style={{
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: require('./images/cat9.jpg'),
    title: 'cat 9',
  },
  {
    img: require('./images/cat8.jpg'),
    title: 'cat 8',
  },  
  {
    img: require('./images/cat7.jpg'),
    title: 'cat 7',
  },  
  {
    img: require('./images/cat1.jpg'),
    title: 'cat 1',
  },
  {
    img: require('./images/cat2.jpg'),
    title: 'cat 2',
    rows: 1,
    cols: 1,
  },
  {
    img: require('./images/cat3.jpg'),
    title: 'cat 3',
  },
  {
    img: require('./images/cat4.jpg'),
    title: 'cat 4',
  },
  {
    img: require('./images/cat5.jpg'),
    title: 'cat 5',
  },
  {
    img: require('./images/cat6.jpg'),
    title: 'cat 6',
  },

];