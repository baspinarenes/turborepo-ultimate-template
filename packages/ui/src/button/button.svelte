<script lang="ts">
  export let label: string;
  export let onClick: () => void;
</script>

<button onclick={onClick}>{label}</button>
