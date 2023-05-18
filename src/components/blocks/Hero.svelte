<script lang="ts">
  import { Block, Container, Highlight, Split, Image } from 'fulldev-ui'

  export let content
</script>

<Block class="dark pt-2xl size-lg large bg-base-1 text-base-12 button:amber-dark first:button:solid first:button:text-black [&_.inline-block]:amber-dark [&_.inline-block]:mb-md">
<Container>
  <Split center>
    <Highlight heading="h1" class="dark size-lg" content={content.highlight}></Highlight>
    <Image {...content.image}></Image>
  </Split>
</Container>
</Block>
