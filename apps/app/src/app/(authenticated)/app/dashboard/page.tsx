import { getTenant } from "@/services/tenant";

export default async function Page() {
  const tenant = await getTenant();

  return <div>{JSON.stringify(tenant).toString()}</div>;
}
