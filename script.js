function showProductDetails(productId) {  
    let product;  
    
    const products = {  
        'samba-jeans': {  
            title: 'samba jeans',  
            description: 'deep blue with thick soles',  
            price: '$120',  
           image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/05c68ce43ff04cb9b46a417b727d923d_9366/Gazelle_Bold_Shoes_Blue_JQ5144_01_standard.jpg',
           social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'
        },  
        'samba-blue': {  
            title: 'Samba Blue',  
            description: 'Blue and Pink',  
            price: '$130',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3ccba8f349d44d3db769c6c8443280be_9366/Gazelle_Shoes_Blue_JH7219_01_standard.jpg' ,
              social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'
        },
        'samba-grey': {  
            title: 'samba grey',  
            description: 'Deep grey summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/ab73afca77724ed682dd2e46780fda44_9366/Samba_OG_Shoes_Grey_JI3212_01_00_standard.jpg' ,
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.' 
        },
          'campus': {  
            title: 'campus',  
            description: 'Black and pink summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85e1879ead9848c0a3e77475f422f8c0_9366/Campus_00s_Shoes_Black_ID3171_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        }, 
         'samba-red': {  
            title: 'Samba Red',  
            description: 'Red and Pink',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d8e62bc2341c4e9fac60b9684f5a7448_9366/Gazelle_Indoor_Shoes_Red_JI2756_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
          'samba-pink-and-yellow': {  
            title: 'samba pink and yellow',  
            description: 'Samba pink and yellow',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8679bd0ca9cd41858ec1887d562b193d_9366/Gazelle_Shoes_Purple_JI1373_01_standard.jpg' ,
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.' 
        }, 
         'samba-blues': {  
            title: 'samba blues',  
            description: 'Oranges blue limited edition',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/18d93cc2854e4938afb9b3381e2b7350_9366/Handball_Spezial_Shoes_Blue_IH7952_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
          'samba': {  
            title: 'Samba',  
            description: 'Blonde summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed5307be61d14b9ea388561724b146ca_9366/Gazelle_Shoes_Pink_ID7006_01_00_standard.jpg' ,
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.' 
        },
          'campus-blue': {  
            title: 'Campus blue',  
            description: 'ocean summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/9bc3ca94e7d14c65a5c296fae93f6d5c_9366/Campus_00s_Shoes_Blue_JI2005_01_standard.jpg' ,
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.' 
        },
          'campus-forest': {  
            title: 'campus forest',  
            description: 'forest green summer',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/6cdd33c339154a90b10983ec0c9fc918_9366/Campus_00s_Shoes_Turquoise_ID1437_01_standard.jpg' ,
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.' 
        }, 
        'campus-oranges': {  
            title: 'campus oranges',  
            description: 'Oranges green summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/558a7f91c9f0463a92b119b021075075_9366/Gazelle_Bold_Shoes_Turquoise_IG4386_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'samba-summer': {  
            title: 'samba summer',  
            description: 'summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54e526a6e3cb4b1caf8974acd0ceb490_9366/Samba_OG_Shoes_Green_JI2681_01_00_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'campus-brown': {  
            title: 'campus brown',  
            description: 'Deep brown summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ed8cf954510b401eafd98d13b1dbed76_9366/Campus_00s_Shoes_Black_JH8998_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'ultra-boost': {  
            title: 'UltraBoost Running',  
            description: 'White summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e05ab9bfc6bd450bb4a7afe5160d73c5_9366/Runfalcon_5_Running_Shoes_White_IE8818_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'forum-blue': {  
            title: 'Forum blue',  
            description: 'Blue summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/57f1889968a04e98912328438ebeb396_9366/Forum_Low_CL_Shoes_White_IH7913_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'samba-blue-and-yellow': {  
            title: 'Samba',  
            description: 'Blue and yellow summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/79e58d33c69848d5b6cbe29424aaf2ee_9366/Handball_Spezial_Shoes_Blue_IG6276_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'samba-pink': {  
            title: 'samba pink',  
            description: 'Womens summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c6c7c78972df4a0e9dd14bc1b5098de7_9366/Handball_Spezial_Shoes_Red_IG6275_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        'campus-black-brown': {  
            title: 'Campus',  
            description: 'black brown summer collection',  
            price: '$120',  
            image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5099d9871f314e028c3d02ccbfa981d1_9366/Campus_00s_Shoes_Grey_IH8071_01_standard.jpg',
            social: 'Adidas пүүз нь дэлхийд алдартай спортын хэрэгслийн брэнд бөгөөд олон жилийн турш хөлбөмбөг, гүйлтийн, фитнес, өдөр тутмын хэрэглээнд зориулан өндөр чанартай, загварлаг пүүзүүдийг үйлдвэрлэж ирсэн.'  
        },
        // Add more products as needed  
    };  
   
    
        // ... Бүтээгдэхүүний код хэвээр байна.
       
        product = products[productId];  
        document.getElementById('details-title').textContent = product.title;  
        document.getElementById('details-description').textContent = product.description;  
        document.getElementById('details-price').textContent = product.price;  
        document.getElementById('details-image').src = product.image;  
        document.getElementById('details-social').src = product.social;
        const detailsContainer = document.getElementById('product-details');  
        detailsContainer.classList.remove('hidden');  
        detailsContainer.style.display = 'flex';  
    
        const bosooElement = document.getElementById('bosoo');  
        bosooElement.style.display = 'flex';  
        bosooElement.style.flexDirection = 'column'; // Correct property  
        bosooElement.style.textAlign = 'center'; 
        bosooElement.style.textFont = 'Bold','Slovic'; 
        bosooElement.style.paddingLeft = '200px';  
    
        const imageElement = document.getElementById('details-image');  
        imageElement.style.width = '700px';  
        imageElement.style.height = '600px';  
        imageElement.style.borderRadius = '10px'; 
        const socialElement = document.getElementById('social');
        socialElement.style.textAlign = 'center';
    
        // Add event listener for the order button  
       
    }    
function closeDetails() {
    const detailsContainer = document.getElementById('product-details');
    detailsContainer.classList.add('hidden');
    detailsContainer.style.display = 'none';
}

     


