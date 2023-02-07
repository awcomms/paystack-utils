<script>
  import {
    Row,
    Column,
    DataTable
  } from 'carbon-components-svelte';

  let headers = [
    { key: 'class', value: 'Class'},
    { key: 'fee', value: 'Fee'},
    { key: 'period', value: 'Period'}
  ]

  let rows = [
    { id: 1, class: 'Creche', fee: '12,000', period: 'Monthly'},
    { id: 2, class: 'Nursery 1 - 2', fee: '13,000', period: 'Trimonthly'},
    { id: 3, class: 'Grade 1 - 6', fee: '24,000', period: 'Trimonthly'},
    { id: 4, class: 'JS 1 -3', fee: '37,000', period: 'Trimonthly'}
  ]
</script>

<Row>
    <h1>Fees</h1>
</Row>

<br />

<Row>
  <h7>All amounts are in Naira<h7>
</Row>

<Row>
  <Column noGutter>
    <DataTable
      headers={headers}
      rows={rows} />
  </Column>
</Row>