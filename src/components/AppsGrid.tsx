import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioApps, categories } from "@/data/portfolioApps";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const ITEMS_PER_PAGE = 9;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const AppsGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredApps =
    activeCategory === "All"
      ? portfolioApps
      : portfolioApps.filter((app) => app.category === activeCategory);

  const totalPages = Math.ceil(filteredApps.length / ITEMS_PER_PAGE);
  const paginatedApps = filteredApps.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const getCategorySlug = (cat: string) =>
    cat.toLowerCase().replace(/[&\s]+/g, "-");

  const getPageNumbers = () => {
    const pages: (number | "ellipsis")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("ellipsis");
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("ellipsis");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <section id="apps" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Purpose-built applications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Each app is designed from the ground up to solve specific industry challenges with precision and craft.
          </p>
        </motion.div>

        {/* Category filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              id={cat === "All" ? undefined : `apps-${getCategorySlug(cat)}`}
              onClick={() => handleCategoryChange(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "gradient-primary text-primary-foreground border-transparent"
                  : "bg-secondary text-secondary-foreground border-border hover:bg-accent"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-1.5 text-xs opacity-70">
                  ({portfolioApps.filter((a) => a.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–
          {Math.min(currentPage * ITEMS_PER_PAGE, filteredApps.length)} of {filteredApps.length} apps
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${currentPage}`}
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {paginatedApps.map((app) => (
              <motion.div key={app.id} variants={item} className="studio-card group cursor-pointer">
                <div className="bg-muted rounded-2xl p-8 flex items-center justify-center mb-6 overflow-hidden">
                  <img
                    src={app.image}
                    alt={`${app.name} app mockup`}
                    className="w-48 h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary bg-accent px-3 py-1 rounded-full">
                    {app.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{app.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{app.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {app.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono tracking-tighter border-t border-border pt-4">
                  <span>{app.version}</span>
                  <span>•</span>
                  <span>{app.size}</span>
                  <span>•</span>
                  <span>{app.rating}</span>
                </div>

                <div className="flex gap-3 mt-5">
                  <button className="flex-1 gradient-primary text-primary-foreground text-sm font-semibold py-2.5 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95">
                    View Details
                  </button>
                  <button className="flex-1 bg-secondary text-secondary-foreground text-sm font-semibold py-2.5 rounded-lg border border-border transition-transform duration-200 hover:scale-105 active:scale-95">
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#apps"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage > 1) setCurrentPage(currentPage - 1);
                    }}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>

                {getPageNumbers().map((page, idx) =>
                  page === "ellipsis" ? (
                    <PaginationItem key={`ellipsis-${idx}`}>
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#apps"
                        isActive={currentPage === page}
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(page);
                        }}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}

                <PaginationItem>
                  <PaginationNext
                    href="#apps"
                    onClick={(e) => {
                      e.preventDefault();
                      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                    }}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default AppsGrid;
