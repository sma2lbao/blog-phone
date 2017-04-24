<template lang="html">
    <section class="menu">
        <input type="text" name="" value="">
        <button type="button"><i class="i-search"></i></button>
        <div class="linkMe">
            <i class="i-github"></i>
            <i class="i-mail"></i>
            <i class="i-wx"></i>
        </div>
    </section>
</template>

<script>
export default {
    name: 'blogMenu',
}
</script>

<style lang="css" scoped>
    .menu{padding: 40px 20px;background-color: #ffdf1f;position: relative;}
    input{width: 100%;border-radius: 20px;height: 40px;border: none;padding: 0 20px;}
    button{width: 20px;height: 20px;border: none;background-color: #fff;position: absolute;top: 50px;right: 50px;}
    .i-search{display: inline-block;background: url('../images/i-search@2x.png') no-repeat center;background-size: 20px 20px;width: 20px;height: 20px;}
    .linkMe{margin-top: 15px;text-align: center;}
    i{margin: 0 10px;}
    .i-github{display: inline-block;background: url('../images/i-twitter@2x.png') no-repeat center;background-size: 40px 30px;width: 40px;height: 30px;}
    .i-mail{display: inline-block;background: url('../images/i-vimeo@2x.png') no-repeat center;background-size: 40px 30px;width: 40px;height: 30px;}
    .i-wx{display: inline-block;background: url('../images/i-dribble@2x.png') no-repeat center;background-size: 40px 30px;width: 40px;height: 30px;}
</style>
