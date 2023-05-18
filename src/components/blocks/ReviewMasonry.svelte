<script>
    import { Container, Block, Card, Carousel, Stack, Highlight, Masonry } from 'fulldev-ui'
  
    let className = ''
    export { className as class }

    export let content

    const cards = [
        {
            heading: 'John Doe',
            textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus diam eget risus varius blandit sit amet non magna.',
        },
        {
            heading: 'John Doe',
            textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
        },
        {
            heading: 'John Doe',
            textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
        },
        {
            heading: 'John Doe',
            textarea: 'Diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
        },
        {
            heading: 'John Doe',
            textarea: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna. Sed vitae diam eget risus varius blandit sit amet non magna.',
        },
    ]
  </script>
  
  <Block class="!light bg-base-2 border-t border-base-6  {className}">
    <Container>
    <Stack center>
        <Highlight class="[&_.inline-block]:amber" content={content.highlight}></Highlight>
      <Masonry class="size-lg !gap-md !space-y-md">
          {#each cards as card}
          {#each {length: 3} as _, i}
             <!-- content here -->
             <Card
             class="!bg-base-1"
             box
             content={card}
             />
             {/each}
        {/each}
      </Masonry>
    </Stack>

    </Container>
  </Block>
  