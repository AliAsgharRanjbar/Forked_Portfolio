import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.png"],
	manifest: {
		name: "Alibot portfolio",
		short_name: "Alibot",
		description: "AliAsghar Ranjbar's portfolio website.",
		icons: [
			{
				src: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
			{
				src: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/maskable_icon_x512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
      {
				src: "/maskable_icon_x384.png",
				sizes: "384x384",
				type: "image/png",
				purpose: "maskable",
			},
      {
				src: "/maskable_icon_x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
      {
				src: "/maskable_icon_x128.png",
				sizes: "128x128",
				type: "image/png",
				purpose: "maskable",
			},
      {
				src: "/maskable_icon_x96.png",
				sizes: "96x96",
				type: "image/png",
				purpose: "maskable",
			},
      {
				src: "/maskable_icon_x48.png",
				sizes: "48x48",
				type: "image/png",
				purpose: "maskable",
			},
		],
		theme_color: "#171717",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
  server: {
    host: true
  }
})