
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// South African landscape inspired colors
				savanna: {
					50: '#FCF9ED',
					100: '#F6EFCD',
					200: '#ECDD9C',
					300: '#E2CA6A',
					400: '#D9B638',
					500: '#BD9A21',
					600: '#9A7B1A',
					700: '#775C14',
					800: '#533D0D',
					900: '#2F2307',
				},
				fynbos: {
					50: '#F3FAEF',
					100: '#E1F2D9',
					200: '#C3E4B2',
					300: '#A5D68C',
					400: '#87C865',
					500: '#68AB45',
					600: '#4E8135',
					700: '#3B6128',
					800: '#28401A',
					900: '#14200D',
				},
				protea: {
					50: '#FFF4F4',
					100: '#FFE9E9',
					200: '#FFC7C7',
					300: '#FFA5A5',
					400: '#FF8383',
					500: '#FF5151',
					600: '#EA2B2B',
					700: '#B82020',
					800: '#851616',
					900: '#530B0B',
				},
				karoo: {
					50: '#F9F7F4',
					100: '#F1EDE6',
					200: '#E2D9CA',
					300: '#D4C5AE',
					400: '#C5B192',
					500: '#B69D76',
					600: '#9D7E56',
					700: '#785E3E',
					800: '#523F29',
					900: '#2C2015',
				},
				ocean: {
					50: '#F0F9FF',
					100: '#E0F2FE',
					200: '#B9E6FE',
					300: '#7CD4FD',
					400: '#36BFFA',
					500: '#0CA5E9',
					600: '#0080C7',
					700: '#0066A2',
					800: '#005085',
					900: '#003B6C',
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Caudex', 'serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'sway': {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				'grow': {
					from: { transform: 'scale(0.9)', opacity: '0.5' },
					to: { transform: 'scale(1)', opacity: '1' },
				},
				'leaf-wave': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(1deg)' },
					'75%': { transform: 'rotate(-1deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'sway': 'sway 5s ease-in-out infinite',
				'grow': 'grow 0.5s ease-out forwards',
				'leaf-wave': 'leaf-wave 3s ease-in-out infinite',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
