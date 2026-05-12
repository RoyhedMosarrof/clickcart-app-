"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Search, User, Menu, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="border-b bg-orange-50 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingCart className="w-7 h-7 text-primary" />
            <span className="text-2xl font-bold text-primary">ClickCart</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className={
                isActive("/")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Home
            </Link>

            <Link
              href="/products"
              className={
                isActive("/products")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Products
            </Link>

            <Link
              href="/categories"
              className={
                isActive("/categories")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Categories
            </Link>

            <Link
              href="/Offers"
              className={
                isActive("/offers")
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-muted-foreground hover:text-primary transition-colors"
              }
            >
              Offers
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>

          <Button variant="ghost" size="icon">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
