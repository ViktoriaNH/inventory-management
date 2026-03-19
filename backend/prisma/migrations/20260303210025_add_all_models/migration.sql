-- CreateTable
CREATE TABLE "inventories" (
    "id" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "img_url" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "category_id" UUID NOT NULL,
    "creator_id" UUID NOT NULL,
    "custom_string1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_string1_name" TEXT,
    "custom_string2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_string2_name" TEXT,
    "custom_string3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_string3_name" TEXT,
    "custom_text1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_text1_name" TEXT,
    "custom_text2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_text2_name" TEXT,
    "custom_text3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_text3_name" TEXT,
    "custom_number1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_number1_name" TEXT,
    "custom_number2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_number2_name" TEXT,
    "custom_number3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_number3_name" TEXT,
    "custom_file1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_file1_name" TEXT,
    "custom_file2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_file2_name" TEXT,
    "custom_file3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_file3_name" TEXT,
    "custom_bool1_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_bool1_name" TEXT,
    "custom_bool2_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_bool2_name" TEXT,
    "custom_bool3_state" BOOLEAN NOT NULL DEFAULT false,
    "custom_bool3_name" TEXT,

    CONSTRAINT "inventories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" UUID NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "inventory_id" UUID,
    "author_id" UUID,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "custom_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "inventory_id" UUID NOT NULL,
    "creator_id" UUID NOT NULL,
    "custom_string1_value" TEXT,
    "custom_string2_value" TEXT,
    "custom_string3_value" TEXT,
    "custom_text1_value" TEXT,
    "custom_text2_value" TEXT,
    "custom_text3_value" TEXT,
    "custom_number1_value" INTEGER,
    "custom_number2_value" INTEGER,
    "custom_number3_value" INTEGER,
    "custom_file1_value" TEXT,
    "custom_file2_value" TEXT,
    "custom_file3_value" TEXT,
    "custom_bool1_value" BOOLEAN,
    "custom_bool2_value" BOOLEAN,
    "custom_bool3_value" BOOLEAN,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "access" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "inventory_id" UUID NOT NULL,

    CONSTRAINT "access_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" UUID NOT NULL,
    "user_id" UUID,
    "item_id" UUID,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventory_tags" (
    "inventory_id" UUID NOT NULL,
    "tag_id" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "items_custom_id_inventory_id_key" ON "items"("custom_id", "inventory_id");

-- CreateIndex
CREATE UNIQUE INDEX "access_user_id_inventory_id_key" ON "access"("user_id", "inventory_id");

-- CreateIndex
CREATE UNIQUE INDEX "likes_user_id_item_id_key" ON "likes"("user_id", "item_id");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE UNIQUE INDEX "inventory_tags_inventory_id_tag_id_key" ON "inventory_tags"("inventory_id", "tag_id");

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access" ADD CONSTRAINT "access_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "access" ADD CONSTRAINT "access_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_tags" ADD CONSTRAINT "inventory_tags_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_tags" ADD CONSTRAINT "inventory_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
