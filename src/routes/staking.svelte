<script lang="ts" context="module">
	import Currencies from "../components/Currencies.svelte";
	import AccountInput from "../components/AccountInput.svelte";
	import Summary from "../components/Summary.svelte";
	import AccountHoldings from "../components/AccountHoldings.svelte";
	import PassiveIncome from "../components/PassiveIncome/index.svelte";
	import StakingPower from "../components/StakingPower.svelte";
  import type { LoadInput, LoadOutput } from "@sveltejs/kit/types/page";
  import { userStore } from "../domain/user";

  let accountInput: string;

  export async function load({ page } : LoadInput): Promise<LoadOutput> {
		if (page.query.has("account")) {
      console.log(`Account query set: ${page.query.get("account")}`);
      const account: string = page.query.get("account") || "";
      userStore.setAccount(account);
			return {
				props: {
					accountInput: account,
				}
			}
		}
		return {};
	}
</script>

<AccountInput {accountInput} />
<Summary />
<Currencies />
<StakingPower />
<PassiveIncome />
<AccountHoldings />