<script>
    import { Container, Block, Card, Carousel } from 'fulldev-ui'
  
    export let collections
  
    let className = ''
    export { className as class }

    const cards = [
        {
            heading: 'Lorem ipsum dolor sit amet',
            // textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
            image: {
                src: 'https://unsplash.it/700/700?random=1',
                alt: 'Lorem ipsum dolor sit amet',
            },
            href: '#'
        },
        {
            heading: 'Lorem ipsum dolor sit amet',
            // textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
            image: {
                src: 'https://unsplash.it/1000/1000?random=1',
                alt: 'Lorem ipsum dolor sit amet',
            },
            href: '#'
        },
        {
            heading: 'Lorem ipsum dolor sit amet',
            // textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
            image: {
                src: 'https://unsplash.it/800/800?random=1',
                alt: 'Lorem ipsum dolor sit amet',
            },
            href: '#'
        },
        {
            heading: 'Lorem ipsum dolor sit amet',
            // textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
            image: {
                src: 'https://unsplash.it/900/900?random=1',
                alt: 'Lorem ipsum dolor sit amet',
            },
            href: '#'
        },
        {
            heading: 'Lorem ipsum dolor sit amet',
            // textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
            image: {
                src: 'https://unsplash.it/1100/1100?random=1',
                alt: 'Lorem ipsum dolor sit amet',
            },
            href: '#'
        },
        {
            heading: 'Lorem ipsum dolor sit amet',
            // textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
            image: {
                src: 'https://unsplash.it/1200/1200?random=1',
                alt: 'Lorem ipsum dolor sit amet',
            },
            href: '#'
        }
    ]
  </script>
  
  <Block class="!light bg-base-1 {className}">
    <Container>
      <h2 class="pb-xl">Onze recente projecten</h2>
      <Carousel class="size-lg">
        {#each cards as card}
          <Card
            orientation="square"
            content={card}
          />
        {/each}
      </Carousel>
    </Container>
  </Block>
  