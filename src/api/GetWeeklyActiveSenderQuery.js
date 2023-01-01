export const myQuery = `
select
  date_trunc('week', block_timestamp)::date as day_date,
  count(distinct from_address) as weekly_active_addresses
from
  bsc.core.fact_transactions
group by
  1
order by
  1
`