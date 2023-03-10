export const myQuery = `
with
  raw_data as (
    select
      block_timestamp,
      LAG(block_timestamp) ignore nulls over (
        order by
          block_number
      ) as prev_timestamp,
      datediff('seconds', prev_timestamp, block_timestamp) as seconds_diff
    from
      bsc.core.fact_blocks
    order by
      block_number asc
  )
select
  date_trunc('week', block_timestamp)::date,
  avg(seconds_diff) as avg_blocktime,
  count(1) as num_blocks
from
  raw_data
group by
  1
order by
  1
`