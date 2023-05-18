<script>
  import { onDestroy, onMount } from 'svelte'
  import {
    onCloudCannonChanges,
    stopCloudCannonChanges,
  } from '@cloudcannon/svelte-connector'

  export let pageData
  export let dataBinding

console.log('pageData', pageData)


  onMount(async () => {
    // console.log('Initial pageData', pageData)
    onCloudCannonChanges((newProps) => {
      // console.log('Received newProps', newProps)
      pageData = newProps
      // console.log('Updated pageData', pageData)
    })
  })

  onDestroy(async () => {
    stopCloudCannonChanges()
  })

  const components = import.meta.glob('../components/blocks/**/*.svelte', {
    eager: true,
  })

  function getComponent(block) {
    return components[`./blocks/${block._component}.svelte`]?.default
  }
</script>


  <!-- If array -->
{#if Array.isArray(pageData.blocks)}
  {#each pageData.blocks as block, i}
    {#if getComponent(block)}
      <svelte:component
        this={getComponent(block)}
        content={block}
        data-cms-bind={dataBinding ? `${dataBinding}[${i}]` : undefined}
      />
    {:else}
      {@html console.error(`ERROR: Component ${block._component} not found`) || ''}
    {/if}
  {/each}

<!-- If object -->
{:else}
  {#each Object.entries(pageData.blocks) as [key, block]}
    {#if getComponent(block)}
      <svelte:component
        this={getComponent(block)}
        content={block}
        data-cms-bind={dataBinding ? `${dataBinding}.${key}` : undefined}
      />
    {:else}
      {@html console.error(`ERROR: Component ${block._component} not found`) || ''}
    {/if}
  {/each}
{/if}
