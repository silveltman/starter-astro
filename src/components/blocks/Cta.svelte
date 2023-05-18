<script lang="ts">
    import { Block, Container, Highlight, Stack } from 'fulldev-ui'
  
    export let content
  </script>
  
  <Block class="dark size-lg large bg-base-1 text-base-12 button:amber-dark first:button:solid first:button:text-black [&_.inline-block]:amber-dark [&_.inline-block]:mb-md">
  <Container>
    <Stack center>
      <Highlight class="amber-dark size-lg" content={content.highlight}></Highlight>
    </Stack>
  </Container>
  </Block>
  