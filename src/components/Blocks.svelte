<script>
  // Import all the components in the directory
  const components = import.meta.glob('./**/*.svelte', {
    eager: true,
  })

  export let contentBlocks

  let blocks
  // If the contentBlocks is an array, don't do anything
  if (Array.isArray(contentBlocks)) {
    blocks = contentBlocks
  } else {
    // If the contentBlocks is an object, turn in into an array
    blocks = Object.keys(contentBlocks).map((key) => {
      return contentBlocks[key]
    })
  }

  function doesExist(block) {
    console.log(`./${block._block_name}.svelte`)
    return components[`./${block._block_name}.svelte`]
  }
</script>

{#each blocks as block, i}
  <!-- Dynamically import the correct component -->
  {#if components[`./${block._block_name}.svelte`]}
    <svelte:component
      this={components[`./${block._block_name}.svelte`].default}
      {block}
      key={i}
    />
  {:else}
    <div class="w-full bg-red-500 p-4 text-center text-white">
      Block not found. Please contact your developer.
    </div>
  {/if}
{/each}
