import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text='Все пиццы' size="lg" className="font-extrabold"/> 
      </Container>

      <TopBar/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Left side - Pizza list filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Right side - Pizza list */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title='Пиццы' 
                items={[{
                  id: 1,
                  name: 'Пепперони',
                  imageUrl: '/images/pizza1.jpg',
                  items: [{ price: 500 }],
                }, {
                  id: 2,
                  name: 'Маргарита',
                  imageUrl: '/images/pizza2.jpg',
                  items: [{ price: 450 }],
                }, {
                  id: 3,
                  name: 'Гавайская',
                  imageUrl: '/images/pizza3.jpg',
                  items: [{ price: 550 }],
                }]} 
                categoryId={1}
              />

              <ProductsGroupList 
                title='Напитки' 
                items={[{
                  id: 1,
                  name: 'Кока-Кола',
                  imageUrl: '/images/drink1.jpg',
                  items: [{ price: 100 }],
                }, {
                  id: 2,
                  name: 'Фанта',
                  imageUrl: '/images/drink2.jpg',
                  items: [{ price: 100 }],
                }]} 
                categoryId={2}
              />

              <ProductsGroupList 
                title='Закуски' 
                items={[{
                  id: 1,
                  name: 'Картофель фри',
                  imageUrl: '/images/snack1.jpg',
                  items: [{ price: 150 }],
                }, {
                  id: 2,
                  name: 'Крылышки',
                  imageUrl: '/images/snack2.jpg',
                  items: [{ price: 200 }],
                }]} 
                categoryId={3}
              />
              
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
