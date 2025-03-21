import { createRoute } from "honox/factory";

export default createRoute((c) => {
  // HonoXの場合は、このログがCloudflare側に出力されない
  console.log("Hello HonoX!");
  return c.render(
    <div>
      <h1 class="text-3xl font-bold underline">Hello!</h1>
    </div>
  );
});
