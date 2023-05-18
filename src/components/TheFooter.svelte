<script lang="ts">
  import { Eyebrow, Footer, Link } from 'fulldev-ui'
  import { IconArrowNarrowRight } from '@tabler/icons-svelte'

  const aanbod = [
    { text: 'Oude metselstenen', href: '/metselstenen' },
    { text: 'Oude bestrating', href: '/bestrating' },
    { text: 'Oude vloertegels', href: '/vloertegels' },
    { text: 'Oude wandtegels', href: '/wandtegels' },
    { text: 'Oude unieke tegeltableaus', href: '/tegeltableaus' },
    { text: 'Diversen', href: '/diversen' },
  ]

  const bedrijf = [
    { text: 'Over ons', href: '/over-ons' },
    { text: 'Inkoop', href: '/inkoop' },
    { text: 'Ervaringen', href: '/ervaringen' },
    { text: 'Contact', href: '/contact' },
    { text: 'Algemene voorwaarden', href: '/algemene-voorwaarden' },
    { text: 'Privacyverklaring', href: '/privacyverklaring' },
  ]
</script>

<Footer>
  <div class="my-auto flex flex-col">
    <h3 class="pb-sm">Aanbod</h3>
    {#each aanbod as item}
      <Link
        href={item.href}
        text={item.text}
      />
    {/each}
  </div>
  <div class="my-auto flex flex-col">
    <h3 class="pb-sm">Bedrijf</h3>

    {#each bedrijf as item}
      <Link
        class="px-0"
        href={item.href}
        text={item.text}
      />
    {/each}
  </div>
  <a
    href="/contact"
    class="group amber bg-base-2 ringed rounded-box p-2xl sm:col-span-2 xl:col-span-1"
  >
    <h1 class="text-base-12">We helpen <br /> u graag!</h1>
    <span class="flex flex-wrap items-center gap-sm pt-xl">
      Contact en locatie
      <IconArrowNarrowRight
        class="transition-transform group-hover:translate-x-md"
      />
    </span>
  </a>
</Footer>
