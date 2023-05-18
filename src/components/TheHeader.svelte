<script lang="ts">
  import { Navbar, Drawer, Link, Button, Logo } from 'fulldev-ui'

  const links = [
    { text: 'Home', href: '/' },
    { text: 'Materialen', href: '/materialen' },
    { text: 'Inkoop', href: '/inkoop' },
    { text: 'Over ons', href: '/over-ons' },
    { text: 'Ervaringen', href: '/ervaringen' },
  ]

  export let pathname: any
</script>

<Navbar>
  <svelte:fragment slot="start">
    <Drawer
      position="top"
      class="lg:hidden"
    >
      <div class="flex flex-col items-center">
        {#each links as item}
          <Link
            class="p-sm"
            activePathname={pathname}
            href={item.href}
            text={item.text}
          />
        {/each}
      </div>
    </Drawer>
    <Logo
      src="/logo.svg"
      alt="Logo van Dillen antieke bouwmaterialen"
    />
  </svelte:fragment>
  <svelte:fragment slot="center">
    {#each links as item}
      <!-- content here -->
      <Link
        class="hidden px-sm lg:flex"
        activePathname={pathname}
        href={item.href}
        text={item.text}
      />
    {/each}
  </svelte:fragment>

  <svelte:fragment slot="end">
    <Button
      class="size-sm orange-dark !text-base"
      variant="ringed"
      text="contact"
      href="/contact"
      content={{ text: 'Contact', href: '/contact' }}
    />
  </svelte:fragment>
</Navbar>
