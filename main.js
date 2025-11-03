const products = [
  {
    id: 1,
    name: 'Nike Shox TL',
    price: 2400,
    image: '',
    colors: [
      { name: 'Black', image: 'IMAGES/black.JPG', hex: '#000000' },
      { name: 'White', image: 'IMAGES/White shox.webp', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/NIKE SHOX.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue.JPG', hex: '#0066FF' },
      { name: 'Brown', image: 'IMAGES/brownshox.webp', hex: '#312b0dff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 2200,
    name: 'Nike TN ',
    price: 1,
    image: 'IMAGES/nike tn.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/nike tn.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/IMG_0932.JPG', hex: '#FFFFFF' },
      { name: 'Blue', image: 'IMAGES/IMG_0912.JPG', hex: '#0066FF' },
      { name: 'Orange', image: 'IMAGES/IMG_0913.JPG', hex: '#ff6f00ff' },
      { name: 'Cyan', image: 'IMAGES/IMG_0914.JPG', hex: '#808080ff' }
    ],
    sizes: ['UK 3', 'UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK10']
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    price: 1400,
    image: 'IMAGES/nike airforce.jpg',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1840.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1839.JPG', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/IMG_1847.JPG', hex: '#a8a6a6ff' },
      { name: 'Green', image: 'IMAGES/IMG_1842.JPG', hex: '#0066FF' },
      { name: 'Grey', image: 'IMAGES/IMG_1843.JPG', hex: '#2b5626ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 4,
    name: 'Nike Air Max 95',
    price: 2000,
    image: 'IMAGES/95.jpg',
    colors: [
      { name: 'Grey', image: 'IMAGES/95.jpg', hex: '#808080' }, 
      { name: 'Black', image: 'IMAGES/95.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/95.jpg', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/95.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/95.jpg', hex: '#0066FF' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 5,
    name: 'Puma Suede ',
    price: 1800,
    image: 'IMAGES/puma suede.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/IMAGES/black suede .JPG',hex:'#000000' },
      { name: 'Red', image: 'IMAGES/puma suede.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/puma suede.jpg', hex: '#0066FF' },
      { name: 'Grey', image: 'IMAGES/puma suede.jpg', hex: '#808080' },
      { name: 'Green', image: 'IMAGES/green suede .JPG', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 6,
    name: 'Adidas Campus',
    price: 1800,
    image: 'IMAGES/CAMPUS 00 B.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CAMPUS 00 B.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/grey 00.JPG', hex: '#9a9a9aff' },
      { name: 'Green', image: 'IMAGES/green 00.JPG', hex: '#007d00ff' },
      { name: 'Blue', image: 'IMAGES/CAMPUS 00 B.jpg', hex: '#0066FF' },
      { name: 'Red', image: 'IMAGES/red 00.JPG', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 7,
    name: 'Vans Knu Skool',
    price: 1600,
    image: 'IMAGES/VANS KNU.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/VANS KNU.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/grey vans .JPG', hex: '#989898ff' },
      { name: 'Red', image: 'IMAGES/VANS KNU.jpg', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue vans.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/VANS KNU.jpg', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 8,
    name: 'New Balance 9060',
    price: 2100.5,
    image: 'IMAGES/9060.jpg',
    colors: [
      { name: 'Grey', image: 'IMAGES/9060.jpg', hex: '#000000ff' },
      { name: 'White', image: 'IMAGES/9060.jpg', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/9060.jpg', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/blue 9060.JPG', hex: '#052d55ff' },
      { name: 'Beige', image: 'IMAGES/9060.jpg', hex: '#D4AF7A' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 9,
    name: 'Jordan 1 Retro High',
    price: 169.99,
    image: '/Users/Aboo/Desktop/WEB SOLE/IMAGES/retro red 1.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/black 1.JPG', hex: '#000000' },
      { name: 'Red', image: '/Users/Aboo/Desktop/WEB SOLE/IMAGES/retro red 1.JPG', hex: '#FF0000' },
      { name: 'Peach', image: 'IMAGES/peach 1.JPG', hex: '#f6c77dff' },
      { name: 'Blue', image: 'IMAGES/l blue 1.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/orange 1 .JPG', hex: '#f87721ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 10,
    name: 'Adidas Samba',
    price: 249.99,
    image: 'IMAGES/IMG_0976.JPG',
    colors: [
      { name: 'Grey', image: 'IMAGES/IMG_0978.JPG', hex: '#f21717ff' },
      { name: 'White', image: 'IMAGES/IMG_0977.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_0976.JPG', hex: '#000000' },
      { name: 'Beige', image: 'IMAGES/IMG_0975.JPG', hex: '#121ecaff' },
      { name: 'Brown', image: 'IMAGES/IMG_0974.JPG', hex: '#347d0dff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 11,
    name: 'Nike P6000',
    price: 64.99,
    image: 'IMAGES/IMG_0987.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/IMG_0987.JPG', hex: '#000000' },
      { name: 'White', image: 'IMAGES/IMG_0988.JPG', hex: '#FFFFFF' },
      { name: 'Red', image: 'IMAGES/IMG_0989.JPG', hex: '#FF0000' },
      { name: 'Brown', image: 'IMAGES/IMG_0990.JPG', hex: '#6e411fff' },
      { name: 'Pink', image: 'IMAGES/IMG_0992.JPG', hex: '#ea00ffff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 12,
    name: 'Nike Portal',
    price: 79.99,
    image: 'IMAGES/IMG_0968.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_0972.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_0968.JPG', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/IMG_0969.JPG', hex: '#0080ffff' },
      { name: 'Pink', image: 'IMAGES/IMG_0971.JPG', hex: '#ff00aeff' },
      { name: 'Orange', image: 'IMAGES/IMG_0973.JPG', hex: '#f56a38ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 13,
    name: 'Nocta',
    price: 109.99,
    image: 'IMAGES/IMG_1838.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1837.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1838.JPG', hex: '#000000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#0066FF' },
      { name: 'Green', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#00AA00' },
      { name: 'Red', image: 'https://images.pexels.com/photos/2759828/pexels-photo-2759828.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 14,
    name: 'Corteiz 95',
    price: 4500,
    image: 'IMAGES/corteiz honeydew.webp',
    colors: [
      { name: 'Grey', image: 'IMAGES/corteiz blue.jpeg', hex: '#e2e2e2ff' },
      { name: 'Green', image: 'IMAGES/corteiz green.jpeg', hex: '#2d7943ff' },
      { name: 'Black', image: 'IMAGES/corteiz honeydew.webp', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/corteiz pink.webp', hex: '#dd36ffff' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 15,
    name: 'Nike Dunk Low',
    price: 119.99,
    image: 'IMAGES/IMG_1797.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/IMG_1797.JPG', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg', hex: '#FFFFFF' },
      { name: 'Blue', image: 'IMAGES/light blue dunks.JPG', hex: '#0066FF' },
      { name: 'Red', image: 'IMAGES/blue dunks.JPG', hex: '#0026ffff' },
      { name: 'Green', image: 'IMAGES/green dunks.JPG', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 16,
    name: 'Nike Uptempo',
    price: 109.99,
    image: 'IMAGES/black up.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white up.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black up.JPG', hex: '#000000' },
      { name: 'Blue', image: 'IMAGES/blue up.JPG', hex: '#3c97ffff' },
      { name: 'Reverse Black', image: 'IMAGES/white and black up.JPG', hex: '#161515ff' },
      { name: 'Reverse white', image: 'IMAGES/black and white up.JPG', hex: '#FFDD00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 17,
    name: 'Asics Gel-Lyte III',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg',
    colors: [
      { name: 'Grey', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#808080' },
      { name: 'White', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#000000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#0066FF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 18,
    name: 'Nike SNDR',
    price: 139.99,
    image: 'IMAGES/IMG_1849.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/IMG_1851.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/IMG_1849.JPG', hex: '#000000' },
      { name: 'Pink', image: 'IMAGES/IMG_1854.JPG', hex: '#e600ffff' },
      { name: 'Blue', image: 'IMAGES/IMG_1852.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/IMG_1855.JPG', hex: '#60f914ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 19,
    name: 'Jordan 4',
    price: 94.99,
    image: 'IMAGES/black j4.JPG',
    colors: [
      { name: 'White', image: 'IMAGES/white j4.JPG', hex: '#FFFFFF' },
      { name: 'Black', image: 'IMAGES/black j4.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red j4.JPG', hex: '#FF0000' },
      { name: 'Blue', image: 'IMAGES/blue j4.JPG', hex: '#0066FF' },
      { name: 'Green', image: 'IMAGES/green j4.JPG', hex: '#065306ff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 20,
    name: 'New Balance 550',
    price: 119.99,
    image: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg',
    colors: [
      { name: 'White', image: 'IMAGES/white 550.JPG', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/grey 550.JPG', hex: '#808080' },
      { name: 'Black', image: 'IMAGES/black 550.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/red 550.JPG', hex: '#ff0000ff' },
      { name: 'Orange', image: 'IMAGES/orange 550.JPG', hex: '#f3610cff' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 21,
    name: 'Nike Corteiz',
    price: 84.99,
    image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg',
    colors: [
      { name: 'White', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#000000' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#0066FF' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg', hex: '#001F3F' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 22,
    name: 'Vans Old Skool',
    price: 69.99,
    image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#FFFFFF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#0066FF' },
      { name: 'Green', image: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg', hex: '#00AA00' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 23,
    name: 'Nike React Element',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg',
    colors: [
      { name: 'White', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#000000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#0066FF' },
      { name: 'Grey', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#808080' },
      { name: 'Orange', image: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg', hex: '#FF6600' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 24,
    name: 'Adidas NMD R1',
    price: 139.99,
    image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#FFFFFF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#0066FF' },
      { name: 'Grey', image: 'https://images.pexels.com/photos/1598511/pexels-photo-1598511.jpeg', hex: '#808080' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 25,
    name: 'Puma Clyde Court',
    price: 124.99,
    image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#FFFFFF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#FF0000' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#0066FF' },
      { name: 'Orange', image: 'https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg', hex: '#FF6600' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 26,
    name: 'Nike Air Presto',
    price: 134.99,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#808080' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#001F3F' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 27,
    name: 'Adidas Gazelle',
    price: 89.99,
    image: 'IMAGES/IMG_0986.JPG',
    colors: [
      { name: 'Blue', image: 'IMAGES/IMG_0985.JPG', hex: '#0066FF' },
      { name: 'Black', image: 'IMAGES/IMG_0986.JPG', hex: '#000000' },
      { name: 'Red', image: 'IMAGES/IMG_0984.JPG', hex: '#FF0000' },
      { name: 'White', image: 'IMAGES/IMG_0980.JPG', hex: '#ffffffe2' },
      
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 28,
    name: 'New Balance 327',
    price: 99.99,
    image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg',
    colors: [
      { name: 'Grey', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#808080' },
      { name: 'White', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#000000' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#001F3F' },
      { name: 'Burgundy', image: 'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg', hex: '#800020' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 29,
    name: 'Nike SB Dunk High',
    price: 129.99,
    image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg',
    colors: [
      { name: 'Black', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#000000' },
      { name: 'White', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#FFFFFF' },
      { name: 'Blue', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#0066FF' },
      { name: 'Red', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#FF0000' },
      { name: 'Purple', image: 'https://images.pexels.com/photos/2300334/pexels-photo-2300334.jpeg', hex: '#AA00AA' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  },
  {
    id: 30,
    name: 'Reebok Club C',
    price: 74.99,
    image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    colors: [
      { name: 'White', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#FFFFFF' },
      { name: 'Black', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#000000' },
      { name: 'Green', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#00AA00' },
      { name: 'Navy', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#001F3F' },
      { name: 'Red', image: 'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg', hex: '#FF0000' }
    ],
    sizes: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11', 'UK 12']
  }
];

const clothingProducts = [
  {
    id: 1001,
    name: 'New Era Yankees 59FIFTY',
    price: 1099.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2005.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2005.JPG', hex: '#158afeff' },
      
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1002,
    name: 'New Era SOX',
    price: 1149.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2006.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2006.JPG', hex: '#000000' },
      
      
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1003,
    name: 'New Era SOX 59FIFTY',
    price: 1199.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2012.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2012.JPG', hex: '#000000' },
    
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1004,
    name: 'SOX',
    price: 1099.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2007.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2008.JPG', hex: '#ff0000ff' },
     
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1005,
    name: 'New Era Red NYC 59FIFTY',
    price: 1149.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2008.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2008.JPG', hex: '#ff0000ff' },
     
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1006,
    name: 'New Era LA',
    price: 450.00,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2009.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/IMG_2009.JPG', hex: '#000000' },
      
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1007,
    name: 'New Era 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2010.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2011.JPG', hex: '#ff0000ff' },

    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1008,
    name: 'New Era 59FIFTY',
    price: 1149.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2011.JPG',
    colors: [
      { name: 'Brown', image: 'IMAGES/CLOTHING/IMG_2011.JPG', hex: '#573a14ff' },
   
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1009,
    name: 'New Era Nets 59FIFTY',
    price: 1199.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2013.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2013.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2014.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2015.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1010,
    name: 'New Era Heat 59FIFTY',
    price: 1099.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2014.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2014.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2015.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1011,
    name: 'New Era Spurs 59FIFTY',
    price: 1149.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2015.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2015.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1012,
    name: 'New Era Mavericks 59FIFTY',
    price: 1199.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2016.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2016.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1013,
    name: 'New Era Cubs 59FIFTY',
    price: 1099.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2017.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2017.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1014,
    name: 'New Era White Sox 59FIFTY',
    price: 1149.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2018.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2018.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1015,
    name: 'New Era Mets 59FIFTY',
    price: 1199.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2019.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2019.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1016,
    name: 'New Era Phillies 59FIFTY',
    price: 1099.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2020.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2020.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2006.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1017,
    name: 'New Era Astros 59FIFTY',
    price: 1149.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2021.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2021.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2006.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2007.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
  {
    id: 1018,
    name: 'New Era Cardinals 59FIFTY',
    price: 599.95,
    category: 'caps',
    image: 'IMAGES/CLOTHING/IMG_2005.JPG',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/caps/IMG_2005.JPG', hex: '#000000' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/caps/IMG_2006.JPG', hex: '#001F3F' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/caps/IMG_2007.JPG', hex: '#808080' },
      { name: 'White', image: 'IMAGES/CLOTHING/caps/IMG_2008.JPG', hex: '#FFFFFF' }
    ],
    sizes: ['7', '7 1/4', '7 1/2', '7 3/4', '8']
  },
 
  {
    id: 2001,
    name: 'Manchester United Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/man united home.webp',
    colors: [
      { name: 'Home', image: 'kits/man united home.webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/man united away.webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/manchester uinted third lit.webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2002,
    name: 'Arsenal Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Arsenal home.webp',
    colors: [
      { name: 'Home', image: 'kits/Arsenal home.webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/Arsenal away.webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/Arsenal third .webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2003,
    name: 'Real Madrid Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/real madrid home .webp',
    colors: [
      { name: 'Home', image: 'kits/real madrid home .webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/real madrid away .webp', hex: '#161b5aff' },
      { name: 'Third', image: 'kits/Real madrid third.webp', hex: '#0b86a1ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2004,
    name: 'Liverpool Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/liverpool home.webp',
    colors: [
      { name: 'Home', image: 'kits/liverpool home.webp', hex: '#DA291C' },
      { name: 'Away', image: 'kits/liverpool away.webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/liverpool third.webp', hex: '#0a8df1ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },

  {
    id: 2006,
    name: 'Orlando Pirates Jersey',
    price: 999.0,
    category: 'soccer',
    image: 'kits/IMG_1340.PNG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1340.PNG', hex: '#000000ff' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2007,
    name: 'Barcelona Jersey',
    price: 1099.0,
    category: 'soccer',
    image: 'kits/Barcelona home .webp',
    colors: [
      { name: 'Home', image: 'kits/Barcelona home .webp', hex: '#0c1285ff' },
      { name: 'Away', image: 'kits/Barcelona away .webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/Barcelona third.webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2008,
    name: 'PSG Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Psg home .webp',
    colors: [
      { name: 'Home', image: 'IMAGES/CLOTHING/soccer/football_soccer_unif_db193845.jpg', hex: '#DA291C' },
     
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  
   
  {
    id: 2010,
    name: 'ATHLETICO MADRID  ',
    price: 599.0,
    category: 'soccer',
    image: 'kits/atheletico madrid home .jpg',
    colors: [
      { name: 'Home', image: 'kits/atheletico madrid home .jpg', hex: '#DA291C' },
      { name: 'Third', image: 'kits/Atheletico madrid third.webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  

  {
    id: 2012,
    name: 'Chelsea Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Chelsea Home.webp',
    colors: [
      { name: 'Home', image: 'kits/Chelsea Third.webp', hex: '#001180ff' },
      { name: 'Away', image: 'kits/chelsea Away .webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/Chelsea Third.webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2013,
    name: 'Manchester City Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/manchester city home.webp',
    colors: [
      { name: 'Home', image: 'kits/manchester city home.webp', hex: '#1c75daff' },
      { name: 'Away', image: 'kits/Manchester city away.webp', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/manchester city third .webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2014,
    name: 'Tottenham Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/Tothenam Home.webp',
    colors: [
      { name: 'Home', image: 'kits/Tothenam Home.webp', hex: '#152dffff' },
      { name: 'Away', image: 'kits/tottenham Away.webp', hex: '#000000ff' },
      { name: 'Third', image: 'kits/tottenham Away.webp', hex: '#ffd901ff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },

  {
    id: 2017,
    name: 'Atletico Madrid Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'IMAGES/CLOTHING/soccer/soccer_football_jers_a77eb634.jpg',
    colors: [
      { name: 'Home', image: 'IMAGES/CLOTHING/soccer/soccer_football_jers_a77eb634.jpg', hex: '#DA291C' },
      { name: 'Away', image: 'IMAGES/CLOTHING/soccer/soccer_football_jers_d6fcec79.jpg', hex: '#FFFFFF' },
      { name: 'Third', image: 'IMAGES/CLOTHING/soccer/soccer_football_jers_e7230780.jpg', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  
  {
    id: 2022,
    name: 'South Africa Jersey',
    price: 999.0,
    category: 'soccer',
    image: 'kits/IMG_1341.JPG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1341.JPG', hex: '#ffff0aff' },
      { name: 'Away', image: 'kits/IMG_1343.WEBP', hex: '#155718ff' },
      
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2023,
    name: 'FRANCE Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/FRANCE H.jpg',
    colors: [
      { name: 'Home', image: 'kits/FRANCE H.jpg', hex: '#DA291C' },
      { name: 'Away', image: 'kits/FRANCE A.jpeg', hex: '#FFFFFF' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2024,
    name: 'PORTUGAL',
    price: 599.0,
    category: 'soccer',
    image: 'kits/IMG_1350.JPG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1350.JPG', hex: '#DA291C' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2025,
    name: 'Kaizer Chiefs Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'Ikits/IMG_1339.PNG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1339.PNG', hex: '#f5b00fff' },rgba(218, 167, 28, 1),
      { name: 'Away', image: 'kits/IMG_1342.PNG', hex: '#eeeeeeab' },
      { name: 'Third', image: 'kits/CHIEFS THIRD .jpeg', hex: '#ffc94bff' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2026,
    name: 'Mamelodi Sundowns Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/IMG_1345.PNG',
    colors: [
      { name: 'Home', image: 'kits/IMG_1345.PNG', hex: '#ffeb0fff' },
      { name: 'Away', image: 'kits/IMG_1346.PNG', hex: '#FFFFFF' },
      { name: 'Third', image: 'IMAGES/CLOTHING/soccer/sports_jersey_white_5416c205.jpg', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2027,
    name: 'Inter Miami Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/IMG_1351.WEBP',
    colors: [
      { name: 'Home', image: 'kits/IMG_1351.WEBP', hex: '#be1cdaff' },
   
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2028,
    name: 'AL NASAAR',
    price: 599.0,
    category: 'soccer',
    image: 'kits/alnaasar home.jpeg',
    colors: [
      { name: 'Home', image: 'kits/alnaasar home.jpeg', hex: '#dad71cff' },
      { name: 'Away', image: 'kits/al nasaar away.jpeg', hex: '#0813ecff' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2029,
    name: 'Spain Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/spain a.jpg',
    colors: [
      { name: 'Home', image: 'kits/spain a.jpg', hex: '#DA291C' },
      { name: 'Away', image: 'kits/Spain h.jpg', hex: '#FFFFFF' },

    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 2030,
    name: 'ENGLAND Jersey',
    price: 599.0,
    category: 'soccer',
    image: 'kits/ENGLAND H.webp',
    colors: [
      { name: 'Home', image: 'kits/ENGLAND H.webp', hex: '#a4a4a4ff' },
      { name: 'Away', image: 'kits/ENGLAND A.jpeg', hex: '#FFFFFF' },
      { name: 'Third', image: 'kits/ENGLAND T.webp', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL']
  },
  {
    id: 3001,
    name: 'Nike Tech Fleece Windrunner',
    price: 1399.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_36ee774e.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_36ee774e.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_59a0c575.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6154a94e.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6a14b3c1.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3002,
    name: 'Nike Tech Fleece Joggers',
    price: 1599.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_59a0c575.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_59a0c575.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6154a94e.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6a14b3c1.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_7028b3f0.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3003,
    name: 'Nike Tech Fleece Hoodie',
    price: 1799.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6154a94e.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6154a94e.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6a14b3c1.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_7028b3f0.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ab6bd22b.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3004,
    name: 'Nike Tech Fleece Shorts',
    price: 1999.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6a14b3c1.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6a14b3c1.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_7028b3f0.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ab6bd22b.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ae8c8b00.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3005,
    name: 'Nike Tech Fleece Full Zip',
    price: 2199.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_7028b3f0.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_7028b3f0.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ab6bd22b.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ae8c8b00.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_b68fcf95.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3006,
    name: 'Nike Tech Fleece Pants',
    price: 1399.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ab6bd22b.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ab6bd22b.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ae8c8b00.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_b68fcf95.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_d8106268.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3007,
    name: 'Nike Tech Fleece Track Jacket',
    price: 1599.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ae8c8b00.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_ae8c8b00.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_b68fcf95.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_d8106268.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_fbb7c7dd.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3008,
    name: 'Nike Tech Fleece Crew Neck',
    price: 1799.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_b68fcf95.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_b68fcf95.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_d8106268.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_fbb7c7dd.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_172093ca.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3009,
    name: 'Nike Tech Fleece Half Zip',
    price: 1999.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_d8106268.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_d8106268.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_fbb7c7dd.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_172093ca.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_3a3934bb.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3010,
    name: 'Nike Tech Fleece Vest',
    price: 2199.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_fbb7c7dd.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_fbb7c7dd.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_172093ca.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_3a3934bb.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_417159b8.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3011,
    name: 'Nike Tech Fleece Tech Pack Hoodie',
    price: 1399.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_172093ca.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_172093ca.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_3a3934bb.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_417159b8.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8258eb31.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3012,
    name: 'Nike Tech Fleece Tech Pack Joggers',
    price: 1599.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_3a3934bb.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_3a3934bb.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_417159b8.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8258eb31.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_88e9b7bc.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3013,
    name: 'Nike Tech Fleece Windrunner 2.0',
    price: 1799.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_417159b8.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_417159b8.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8258eb31.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_88e9b7bc.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8f4ad005.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3014,
    name: 'Nike Tech Fleece Joggers 2.0',
    price: 1999.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8258eb31.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8258eb31.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_88e9b7bc.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8f4ad005.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_aaf9c272.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3015,
    name: 'Nike Tech Fleece Pullover Hoodie',
    price: 2199.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_88e9b7bc.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_88e9b7bc.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8f4ad005.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_aaf9c272.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_b6e4ced6.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3016,
    name: 'Nike Tech Fleece Training Shorts',
    price: 1399.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8f4ad005.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_8f4ad005.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_aaf9c272.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_b6e4ced6.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_bd500272.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3017,
    name: 'Nike Tech Fleece Tech Suit Jacket',
    price: 1599.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_aaf9c272.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_aaf9c272.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_b6e4ced6.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_bd500272.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_e1fcc503.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3018,
    name: 'Nike Tech Fleece Tech Suit Pants',
    price: 1799.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_b6e4ced6.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_b6e4ced6.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_bd500272.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_e1fcc503.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_013c611d.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3019,
    name: 'Nike Tech Fleece Bomber Jacket',
    price: 1999.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_bd500272.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_bd500272.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_e1fcc503.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_013c611d.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_2eb498a3.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3020,
    name: 'Nike Tech Fleece Track Pants',
    price: 2199.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_e1fcc503.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/nike_tech_fleece_hoo_e1fcc503.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_013c611d.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_2eb498a3.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_620900c4.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3021,
    name: 'Nike Tech Fleece Zip Hoodie',
    price: 1399.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_013c611d.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_013c611d.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_2eb498a3.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_620900c4.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_6e0f8d34.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3022,
    name: 'Nike Tech Fleece Sweatpants',
    price: 1599.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_2eb498a3.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_2eb498a3.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_620900c4.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_6e0f8d34.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_76403fce.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3023,
    name: 'Nike Tech Fleece Quarter Zip',
    price: 1799.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_620900c4.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_620900c4.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_6e0f8d34.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_76403fce.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_7ee61dad.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3024,
    name: 'Nike Tech Fleece Running Jacket',
    price: 1999.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_6e0f8d34.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_6e0f8d34.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_76403fce.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_7ee61dad.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_8da67f10.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3025,
    name: 'Nike Tech Fleece Tapered Pants',
    price: 2199.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_76403fce.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_76403fce.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_7ee61dad.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_8da67f10.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_a7a7cd77.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3026,
    name: 'Nike Tech Fleece Cropped Hoodie',
    price: 1399.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_7ee61dad.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_7ee61dad.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_8da67f10.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_a7a7cd77.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_b222acb8.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3027,
    name: 'Nike Tech Fleece Windbreaker',
    price: 1599.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_8da67f10.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_8da67f10.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_a7a7cd77.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_b222acb8.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_e0a162ea.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3028,
    name: 'Nike Tech Fleece Utility Pants',
    price: 1799.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_a7a7cd77.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_a7a7cd77.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_b222acb8.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_e0a162ea.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_36ee774e.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3029,
    name: 'Nike Tech Fleece Tech Cape',
    price: 1999.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_b222acb8.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_b222acb8.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_e0a162ea.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_36ee774e.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_59a0c575.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 3030,
    name: 'Nike Tech Fleece Tech Poncho',
    price: 2199.95,
    category: 'techfleece',
    image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_e0a162ea.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/techfleece/sports_jacket_windbr_e0a162ea.jpg', hex: '#000000' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_36ee774e.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_59a0c575.jpg', hex: '#001F3F' },
      { name: 'Olive', image: 'IMAGES/CLOTHING/techfleece/athletic_joggers_swe_6154a94e.jpg', hex: '#556B2F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4001,
    name: 'Essentials Hoodie',
    price: 1999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0aa806cd.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0aa806cd.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0c50178c.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0fc61db1.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_2cd33bec.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4002,
    name: 'Rhude Traxedo Pants',
    price: 2499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0c50178c.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0c50178c.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0fc61db1.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_2cd33bec.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_41b8582f.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4003,
    name: 'Gallery Dept Tee',
    price: 2999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0fc61db1.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0fc61db1.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_2cd33bec.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_41b8582f.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_4957b4e7.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4004,
    name: 'Palm Angels Track Jacket',
    price: 3499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_2cd33bec.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_2cd33bec.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_41b8582f.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_4957b4e7.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_59474c26.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4005,
    name: 'Essentials Sweatpants',
    price: 3999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_41b8582f.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_41b8582f.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_4957b4e7.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_59474c26.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_733556aa.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4006,
    name: 'Rhude Monaco Hoodie',
    price: 4499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_4957b4e7.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_4957b4e7.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_59474c26.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_733556aa.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_ac9abe03.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4007,
    name: 'Fear of God Hoodie',
    price: 1999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_59474c26.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_59474c26.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_733556aa.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_ac9abe03.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_e8d31c41.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4008,
    name: 'Off-White Tee',
    price: 2499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_733556aa.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_733556aa.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_ac9abe03.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_e8d31c41.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_100319f0.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4009,
    name: 'Balenciaga Hoodie',
    price: 2999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_ac9abe03.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_ac9abe03.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_e8d31c41.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_100319f0.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_16c1f20d.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4010,
    name: 'Vetements Jacket',
    price: 3499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_e8d31c41.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_e8d31c41.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_100319f0.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_16c1f20d.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_43042107.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4011,
    name: 'Amiri Jeans',
    price: 3999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_100319f0.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_100319f0.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_16c1f20d.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_43042107.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_4d3b1a12.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4012,
    name: 'Chrome Hearts Tee',
    price: 4499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_16c1f20d.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_16c1f20d.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_43042107.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_4d3b1a12.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_8c57da19.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4013,
    name: 'Represent Hoodie',
    price: 1999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_43042107.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_43042107.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_4d3b1a12.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_8c57da19.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_968d04bf.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4014,
    name: 'Drew House Tee',
    price: 2499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_4d3b1a12.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_4d3b1a12.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_8c57da19.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_968d04bf.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_9b9184d1.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4015,
    name: 'Stussy Jacket',
    price: 2999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_8c57da19.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_8c57da19.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_968d04bf.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_9b9184d1.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_d86d6840.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4016,
    name: 'Supreme Box Logo Hoodie',
    price: 3499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_968d04bf.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_968d04bf.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_9b9184d1.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_d86d6840.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dd616eca.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4017,
    name: 'Bape Shark Hoodie',
    price: 3999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_9b9184d1.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_9b9184d1.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_d86d6840.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dd616eca.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dff3f41b.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4018,
    name: 'Kith Hoodie',
    price: 4499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_d86d6840.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_d86d6840.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dd616eca.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dff3f41b.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_19e2ddd7.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4019,
    name: 'Essentials Tee',
    price: 1999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dd616eca.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dd616eca.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dff3f41b.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_19e2ddd7.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_1c10939f.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4020,
    name: 'Rhude Jacket',
    price: 2499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dff3f41b.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/luxury_designer_clot_dff3f41b.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_19e2ddd7.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_1c10939f.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_6f981553.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4021,
    name: 'Gallery Dept Hoodie',
    price: 2999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_19e2ddd7.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_19e2ddd7.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_1c10939f.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_6f981553.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_8d65852b.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4022,
    name: 'Palm Angels Pants',
    price: 3499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_1c10939f.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_1c10939f.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_6f981553.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_8d65852b.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_97e57d17.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4023,
    name: 'Essentials Track Jacket',
    price: 3999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_6f981553.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_6f981553.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_8d65852b.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_97e57d17.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_babf312e.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4024,
    name: 'Rhude Tee',
    price: 4499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_8d65852b.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_8d65852b.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_97e57d17.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_babf312e.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_cb281a3f.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4025,
    name: 'Fear of God Essentials Pants',
    price: 1999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_97e57d17.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_97e57d17.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_babf312e.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_cb281a3f.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f51c82e1.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4026,
    name: 'Off-White Hoodie',
    price: 2499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_babf312e.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_babf312e.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_cb281a3f.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f51c82e1.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f52a3ba6.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4027,
    name: 'Balenciaga Tee',
    price: 2999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_cb281a3f.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_cb281a3f.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f51c82e1.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f52a3ba6.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_fdd288a3.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4028,
    name: 'Vetements Hoodie',
    price: 3499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f51c82e1.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f51c82e1.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f52a3ba6.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_fdd288a3.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0aa806cd.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4029,
    name: 'Amiri Tee',
    price: 3999.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f52a3ba6.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_f52a3ba6.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_fdd288a3.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0aa806cd.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0c50178c.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 4030,
    name: 'Chrome Hearts Hoodie',
    price: 4499.95,
    category: 'clothing',
    image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_fdd288a3.jpg',
    colors: [
      { name: 'Black', image: 'IMAGES/CLOTHING/premium/streetwear_hoodie_pr_fdd288a3.jpg', hex: '#000000' },
      { name: 'White', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0aa806cd.jpg', hex: '#FFFFFF' },
      { name: 'Grey', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0c50178c.jpg', hex: '#808080' },
      { name: 'Navy', image: 'IMAGES/CLOTHING/premium/designer_tshirt_stre_0fc61db1.jpg', hex: '#001F3F' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  }];

let cart = JSON.parse(localStorage.getItem('soleTheoryCart') || '[]');

function renderProducts() {
  const productsGrid = document.getElementById('productsGrid');

  products.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.style.animationDelay = `${index * 0.1}s`;

    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">R ${product.price.toFixed(2)}</p>
        <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
      </div>
    `;

    productsGrid.appendChild(productCard);
  });

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showProductDetail(productId);
    });
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  const cartCount = document.getElementById('cartCount');
  const cartTotal = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  localStorage.setItem('soleTheoryCart', JSON.stringify(cart));

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartTotal.textContent = 'R 0.00';
    return;
  }

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <div class="cart-item-image"></div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">R ${item.price.toFixed(2)} x ${item.quantity}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">Remove</button>
    `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = `R ${total.toFixed(2)}`;

  document.querySelectorAll('.cart-item-remove').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      removeFromCart(productId);
    });
  });
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: #ff0000;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    z-index: 3000;
    animation: slideInRight 0.3s ease-out;
    box-shadow: 0 10px 30px rgba(255, 0, 0, 0.5);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartClose = document.getElementById('cartClose');
const cartOverlay = document.getElementById('cartOverlay');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchResultsPanel = document.getElementById('searchResultsPanel');
const searchResultsOverlay = document.getElementById('searchResultsOverlay');
const searchClose = document.getElementById('searchClose');
const searchResultsContent = document.getElementById('searchResultsContent');

mobileMenuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

cartBtn.addEventListener('click', () => {
  cartSidebar.classList.add('active');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
});

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
  cartSidebar.classList.remove('active');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

function performSearch(query) {
  if (!query || query.trim() === '') {
    searchResultsContent.innerHTML = '<p class="no-results">Start typing to search...</p>';
    return;
  }

  const searchQuery = query.toLowerCase().trim();
  const results = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery) ||
    product.price.toString().includes(searchQuery)
  );

  if (results.length === 0) {
    searchResultsContent.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  searchResultsContent.innerHTML = results.map(product => `
    <div class="search-result-item" data-id="${product.id}">
      <div class="search-result-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="search-result-info">
        <h4>${product.name}</h4>
        <p class="search-result-price">$${product.price.toFixed(2)}</p>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const productId = parseInt(item.dataset.id);
      closeSearch();
      showProductDetail(productId);
    });
  });
}

function openSearch() {
  searchResultsPanel.classList.add('active');
  searchResultsOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  searchInput.focus();
}

function closeSearch() {
  searchResultsPanel.classList.remove('active');
  searchResultsOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
  searchInput.value = '';
  searchResultsContent.innerHTML = '<p class="no-results">Start typing to search...</p>';
}

searchInput.addEventListener('input', (e) => {
  performSearch(e.target.value);
  if (!searchResultsPanel.classList.contains('active')) {
    openSearch();
  }
});

searchInput.addEventListener('focus', () => {
  openSearch();
});

searchBtn.addEventListener('click', () => {
  openSearch();
});

searchClose.addEventListener('click', closeSearch);
searchResultsOverlay.addEventListener('click', closeSearch);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && searchResultsPanel.classList.contains('active')) {
    closeSearch();
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  lastScroll = currentScroll;
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification('Message sent! We\'ll get back to you soon.');
  contactForm.reset();
});

const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  showNotification('Thanks for subscribing!');
  newsletterForm.reset();
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

function showProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  updateSearchBarVisibility();

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="product-detail-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="product-detail-container">
        <div class="product-detail-image">
          <img id="productDetailImg" src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-detail-price">$${product.price.toFixed(2)}</p>

          <div class="color-selector">
            <h3>Select Color</h3>
            <div class="color-options" id="colorOptions">
              ${product.colors.map((color, index) => `
                <button class="color-btn ${index === 0 ? 'active' : ''}"
                        data-image="${color.image}"
                        data-color="${color.name}"
                        style="background: ${color.hex};"
                        title="${color.name}">
                </button>
              `).join('')}
            </div>
            <p class="selected-color" id="selectedColor">${product.colors[0].name}</p>
          </div>

          <div class="size-selector">
            <h3>Select Size</h3>
            <div class="size-options" id="sizeOptions">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          <button class="checkout-detail-btn" id="checkoutDetailBtn">CHECKOUT</button>
        </div>
      </div>
    </div>
  `;

  let selectedColor = product.colors[0].name;
  let selectedSize = null;

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById('productDetailImg').src = e.target.dataset.image;
      selectedColor = e.target.dataset.color;
      document.getElementById('selectedColor').textContent = selectedColor;
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
    });
  });

  document.getElementById('checkoutDetailBtn').addEventListener('click', () => {
    if (!selectedSize) {
      showNotification('Please select a size');
      return;
    }
    addToCart(productId);
    showNotification(`${product.name} (${selectedColor}, ${selectedSize}) added to cart!`);
  });
}

function setupClothingLinks() {
  const clothingItems = document.querySelectorAll('.clothing-item');
  clothingItems.forEach((item, index) => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const categories = ['clothing', 'soccer', 'techfleece', 'caps'];
      showClothingCategory(categories[index]);
    });
  });
}

function updateSearchBarVisibility() {
  const searchContainer = document.querySelector('.search-container');
  const cartBtn = document.querySelector('.cart-btn');
  if (searchContainer) searchContainer.style.display = 'flex';
  if (cartBtn) cartBtn.style.display = 'flex';
}

function showClothingCategory(category) {
  const categoryTitles = {
    clothing: 'Premium Streetwear',
    soccer: 'Football Jerseys',
    techfleece: 'Nike Tech Fleece',
    caps: 'New Era 59FIFTY'
  };

  const categoryDescriptions = {
    clothing: 'Essentials, Rhude, Gallery Dept, Palm Angels',
    soccer: 'Man United, Arsenal, Real Madrid & More',
    techfleece: 'Joggers, Hoodies, Windrunners',
    caps: 'MLB, NBA, Exclusive Designs'
  };

  updateSearchBarVisibility();

  const categoryProducts = clothingProducts.filter(p => p.category === category);

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="clothing-category-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="section-header">
        <h2>${categoryTitles[category].toUpperCase()}</h2>
        <p>${categoryDescriptions[category]}</p>
      </div>

      <div class="products-grid">
        ${categoryProducts.map((product, index) => `
          <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <div class="product-image">
              <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect fill=\\'%23222\\' width=\\'400\\' height=\\'400\\'/%3E%3Ctext fill=\\'%23666\\' font-family=\\'Arial\\' font-size=\\'20\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\'%3E${product.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="product-info">
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">R ${product.price.toFixed(2)}</p>
              <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.dataset.id);
      showClothingProductDetail(productId);
    });
  });
}

function showClothingProductDetail(productId) {
  const product = clothingProducts.find(p => p.id === productId);
  if (!product) return;

  updateSearchBarVisibility();

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="product-detail-page">
      <button class="back-btn" onclick="location.reload()">
        <span>&larr;</span> BACK TO SHOP
      </button>

      <div class="product-detail-container">
        <div class="product-detail-image">
          <img id="productDetailImg" src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'400\\'%3E%3Crect fill=\\'%23222\\' width=\\'400\\' height=\\'400\\'/%3E%3Ctext fill=\\'%23666\\' font-family=\\'Arial\\' font-size=\\'20\\' x=\\'50%25\\' y=\\'50%25\\' text-anchor=\\'middle\\' dy=\\'.3em\\'%3E${product.name}%3C/text%3E%3C/svg%3E'">
        </div>

        <div class="product-detail-info">
          <h1>${product.name}</h1>
          <p class="product-detail-price">R ${product.price.toFixed(2)}</p>

          <div class="color-selector">
            <h3>Select Color</h3>
            <div class="color-options" id="colorOptions">
              ${product.colors.map((color, index) => `
                <button class="color-btn ${index === 0 ? 'active' : ''}"
                        data-image="${color.image}"
                        data-color="${color.name}"
                        style="background: ${color.hex};"
                        title="${color.name}">
                </button>
              `).join('')}
            </div>
            <p class="selected-color" id="selectedColor">${product.colors[0].name}</p>
          </div>

          <div class="size-selector">
            <h3>Select Size</h3>
            <div class="size-options" id="sizeOptions">
              ${product.sizes.map(size => `
                <button class="size-btn" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>

          <button class="checkout-detail-btn" id="checkoutDetailBtn">CHECKOUT</button>
        </div>
      </div>
    </div>
  `;

  let selectedColor = product.colors[0].name;
  let selectedSize = null;

  document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      document.getElementById('productDetailImg').src = e.target.dataset.image;
      selectedColor = e.target.dataset.color;
      document.getElementById('selectedColor').textContent = selectedColor;
    });
  });

  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      selectedSize = e.target.dataset.size;
    });
  });

  document.getElementById('checkoutDetailBtn').addEventListener('click', () => {
    if (!selectedSize) {
      showNotification('Please select a size');
      return;
    }
    const cartItem = {
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      quantity: 1
    };
    
    const existingItem = cart.find(item => item.id === productId && item.color === selectedColor && item.size === selectedSize);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push(cartItem);
    }
    
    updateCart();
    showNotification(`${product.name} (${selectedColor}, ${selectedSize}) added to cart!`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCart();
  setupClothingLinks();

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out!');
        return;
      }
      window.location.href = '/checkout.html';
    });
  }

  document.querySelectorAll('.product-card, .clothing-item, .value-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

